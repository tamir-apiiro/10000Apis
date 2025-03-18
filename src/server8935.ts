
const express = require('express')
import {handler8935} from "./handler8935";
const app = express()
app.get('/8935', handler8935)
app.listen(3000, () => {})
        