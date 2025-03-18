
const express = require('express')
import {handler6722} from "./handler6722";
const app = express()
app.get('/6722', handler6722)
app.listen(3000, () => {})
        