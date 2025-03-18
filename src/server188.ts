
const express = require('express')
import {handler188} from "./handler188";
const app = express()
app.get('/188', handler188)
app.listen(3000, () => {})
        