
const express = require('express')
import {handler6045} from "./handler6045";
const app = express()
app.get('/6045', handler6045)
app.listen(3000, () => {})
        