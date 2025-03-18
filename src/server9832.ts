
const express = require('express')
import {handler9832} from "./handler9832";
const app = express()
app.get('/9832', handler9832)
app.listen(3000, () => {})
        