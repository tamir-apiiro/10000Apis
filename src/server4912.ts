
const express = require('express')
import {handler4912} from "./handler4912";
const app = express()
app.get('/4912', handler4912)
app.listen(3000, () => {})
        