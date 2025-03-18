
const express = require('express')
import {handler4931} from "./handler4931";
const app = express()
app.get('/4931', handler4931)
app.listen(3000, () => {})
        