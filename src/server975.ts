
const express = require('express')
import {handler975} from "./handler975";
const app = express()
app.get('/975', handler975)
app.listen(3000, () => {})
        