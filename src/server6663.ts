
const express = require('express')
import {handler6663} from "./handler6663";
const app = express()
app.get('/6663', handler6663)
app.listen(3000, () => {})
        