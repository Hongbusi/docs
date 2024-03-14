import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <div className="flex-1">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="xl:col-span-1">
          <h6 className="text-foreground text-base">洪布斯</h6>
          <p className="mt-4 text-sm">知道的越多，不知道的越多。</p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
          <div className="grid grid-cols-2 gap-4 xl:gap-8 xl:grid-cols-4 text-sm">
            <div className="xl:col-span-1">
              <h6 className="text-foreground text-base">找到我</h6>
              <ul className="text-sm">
                <li className="mt-4 transition-colors text-foreground/60 hover:text-foreground">
                  <Link href="https://juejin.cn/user/984809513428461" target="_blank" rel="noreferrer">掘金</Link>
                </li>
                <li className="mt-4 transition-colors text-foreground/60 hover:text-foreground">
                  <Link href="https://github.com/Hongbusi" target="_blank" rel="noreferrer">GitHub</Link>
                </li>
                <li className="mt-4 transition-colors text-foreground/60 hover:text-foreground">
                  <Link href="https://twitter.com/Hongbusi" target="_blank" rel="noreferrer">Twitter</Link>
                </li>
              </ul>
            </div>
            <div className="xl:col-span-1">
              <h6 className="text-foreground text-base">我的网站</h6>
              <ul className="text-sm">
                <li className="mt-4 transition-colors text-foreground/60 hover:text-foreground">
                  <Link href="https://hongbusi.com" target="_blank" rel="noreferrer">博客</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2">
              <h6 className="text-foreground text-base">二维码</h6>
              <p className="mt-4 text-sm">关注公众号「洪布斯」，第一时间收到最新推文。</p>
              <Image className="mt-4" src="/qr-code.png" alt="二维码" width={120} height={120} />
            </div>
          </div>
        </div>
      </div>

      <div className="my-12 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="flex flex-col items-center text-sm text-foreground/60">
        <p>{`Copyright © 2020 - ${new Date().getFullYear()}, All in Hongbusi.`}</p>
        <p className="mt-2">
          <Link
            className="transition-colors hover:text-foreground"
            href="https://beian.miit.gov.cn"
            target="_blank"
            rel="noreferrer"
          >
            浙ICP备2022017304号-1
          </Link>
        </p>
      </div>
    </div>
  )
}
