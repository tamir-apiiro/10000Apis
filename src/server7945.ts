
const express = require('express')
import {handler7945} from "./handler7945";
const app = express()
app.get('/7945', handler7945)
app.listen(3000, () => {})
        