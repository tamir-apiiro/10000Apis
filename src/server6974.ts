
const express = require('express')
import {handler6974} from "./handler6974";
const app = express()
app.get('/6974', handler6974)
app.listen(3000, () => {})
        