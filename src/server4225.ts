
const express = require('express')
import {handler4225} from "./handler4225";
const app = express()
app.get('/4225', handler4225)
app.listen(3000, () => {})
        