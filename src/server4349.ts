
const express = require('express')
import {handler4349} from "./handler4349";
const app = express()
app.get('/4349', handler4349)
app.listen(3000, () => {})
        