
const express = require('express')
import {handler6842} from "./handler6842";
const app = express()
app.get('/6842', handler6842)
app.listen(3000, () => {})
        