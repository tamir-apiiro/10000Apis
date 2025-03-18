
const express = require('express')
import {handler8534} from "./handler8534";
const app = express()
app.get('/8534', handler8534)
app.listen(3000, () => {})
        