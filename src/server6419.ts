
const express = require('express')
import {handler6419} from "./handler6419";
const app = express()
app.get('/6419', handler6419)
app.listen(3000, () => {})
        