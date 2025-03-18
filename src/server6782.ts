
const express = require('express')
import {handler6782} from "./handler6782";
const app = express()
app.get('/6782', handler6782)
app.listen(3000, () => {})
        