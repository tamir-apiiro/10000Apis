
const express = require('express')
import {handler4429} from "./handler4429";
const app = express()
app.get('/4429', handler4429)
app.listen(3000, () => {})
        