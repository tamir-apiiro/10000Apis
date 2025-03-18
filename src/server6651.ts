
const express = require('express')
import {handler6651} from "./handler6651";
const app = express()
app.get('/6651', handler6651)
app.listen(3000, () => {})
        