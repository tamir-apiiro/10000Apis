
const express = require('express')
import {handler6185} from "./handler6185";
const app = express()
app.get('/6185', handler6185)
app.listen(3000, () => {})
        