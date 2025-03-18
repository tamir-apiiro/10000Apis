
const express = require('express')
import {handler147} from "./handler147";
const app = express()
app.get('/147', handler147)
app.listen(3000, () => {})
        