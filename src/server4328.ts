
const express = require('express')
import {handler4328} from "./handler4328";
const app = express()
app.get('/4328', handler4328)
app.listen(3000, () => {})
        