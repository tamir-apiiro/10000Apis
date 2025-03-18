
const express = require('express')
import {handler4622} from "./handler4622";
const app = express()
app.get('/4622', handler4622)
app.listen(3000, () => {})
        