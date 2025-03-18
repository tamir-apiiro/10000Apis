
const express = require('express')
import {handler628} from "./handler628";
const app = express()
app.get('/628', handler628)
app.listen(3000, () => {})
        