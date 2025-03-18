
const express = require('express')
import {handler7496} from "./handler7496";
const app = express()
app.get('/7496', handler7496)
app.listen(3000, () => {})
        