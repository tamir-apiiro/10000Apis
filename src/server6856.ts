
const express = require('express')
import {handler6856} from "./handler6856";
const app = express()
app.get('/6856', handler6856)
app.listen(3000, () => {})
        