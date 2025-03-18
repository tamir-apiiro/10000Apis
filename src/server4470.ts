
const express = require('express')
import {handler4470} from "./handler4470";
const app = express()
app.get('/4470', handler4470)
app.listen(3000, () => {})
        