
const express = require('express')
import {handler7526} from "./handler7526";
const app = express()
app.get('/7526', handler7526)
app.listen(3000, () => {})
        