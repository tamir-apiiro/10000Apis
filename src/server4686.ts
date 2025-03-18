
const express = require('express')
import {handler4686} from "./handler4686";
const app = express()
app.get('/4686', handler4686)
app.listen(3000, () => {})
        