
const express = require('express')
import {handler534} from "./handler534";
const app = express()
app.get('/534', handler534)
app.listen(3000, () => {})
        