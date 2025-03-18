
const express = require('express')
import {handler6816} from "./handler6816";
const app = express()
app.get('/6816', handler6816)
app.listen(3000, () => {})
        