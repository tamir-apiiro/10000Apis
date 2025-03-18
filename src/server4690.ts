
const express = require('express')
import {handler4690} from "./handler4690";
const app = express()
app.get('/4690', handler4690)
app.listen(3000, () => {})
        