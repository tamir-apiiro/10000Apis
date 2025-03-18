
const express = require('express')
import {handler878} from "./handler878";
const app = express()
app.get('/878', handler878)
app.listen(3000, () => {})
        