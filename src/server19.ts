
const express = require('express')
import {handler19} from "./handler19";
const app = express()
app.get('/19', handler19)
app.listen(3000, () => {})
        