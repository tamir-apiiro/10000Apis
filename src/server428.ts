
const express = require('express')
import {handler428} from "./handler428";
const app = express()
app.get('/428', handler428)
app.listen(3000, () => {})
        