
const express = require('express')
import {handler6229} from "./handler6229";
const app = express()
app.get('/6229', handler6229)
app.listen(3000, () => {})
        