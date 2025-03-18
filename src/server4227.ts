
const express = require('express')
import {handler4227} from "./handler4227";
const app = express()
app.get('/4227', handler4227)
app.listen(3000, () => {})
        