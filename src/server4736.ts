
const express = require('express')
import {handler4736} from "./handler4736";
const app = express()
app.get('/4736', handler4736)
app.listen(3000, () => {})
        