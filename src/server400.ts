
const express = require('express')
import {handler400} from "./handler400";
const app = express()
app.get('/400', handler400)
app.listen(3000, () => {})
        