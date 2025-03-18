
const express = require('express')
import {handler6617} from "./handler6617";
const app = express()
app.get('/6617', handler6617)
app.listen(3000, () => {})
        