
const express = require('express')
import {handler7534} from "./handler7534";
const app = express()
app.get('/7534', handler7534)
app.listen(3000, () => {})
        