
const express = require('express')
import {handler6009} from "./handler6009";
const app = express()
app.get('/6009', handler6009)
app.listen(3000, () => {})
        