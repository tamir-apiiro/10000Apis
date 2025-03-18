
const express = require('express')
import {handler6860} from "./handler6860";
const app = express()
app.get('/6860', handler6860)
app.listen(3000, () => {})
        