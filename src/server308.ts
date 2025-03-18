
const express = require('express')
import {handler308} from "./handler308";
const app = express()
app.get('/308', handler308)
app.listen(3000, () => {})
        