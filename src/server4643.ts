
const express = require('express')
import {handler4643} from "./handler4643";
const app = express()
app.get('/4643', handler4643)
app.listen(3000, () => {})
        