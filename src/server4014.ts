
const express = require('express')
import {handler4014} from "./handler4014";
const app = express()
app.get('/4014', handler4014)
app.listen(3000, () => {})
        