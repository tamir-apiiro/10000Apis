
const express = require('express')
import {handler673} from "./handler673";
const app = express()
app.get('/673', handler673)
app.listen(3000, () => {})
        