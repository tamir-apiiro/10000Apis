
const express = require('express')
import {handler7468} from "./handler7468";
const app = express()
app.get('/7468', handler7468)
app.listen(3000, () => {})
        