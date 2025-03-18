
const express = require('express')
import {handler197} from "./handler197";
const app = express()
app.get('/197', handler197)
app.listen(3000, () => {})
        