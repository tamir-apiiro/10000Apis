
const express = require('express')
import {handler6847} from "./handler6847";
const app = express()
app.get('/6847', handler6847)
app.listen(3000, () => {})
        