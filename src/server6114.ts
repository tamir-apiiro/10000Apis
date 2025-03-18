
const express = require('express')
import {handler6114} from "./handler6114";
const app = express()
app.get('/6114', handler6114)
app.listen(3000, () => {})
        