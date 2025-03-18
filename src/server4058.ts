
const express = require('express')
import {handler4058} from "./handler4058";
const app = express()
app.get('/4058', handler4058)
app.listen(3000, () => {})
        